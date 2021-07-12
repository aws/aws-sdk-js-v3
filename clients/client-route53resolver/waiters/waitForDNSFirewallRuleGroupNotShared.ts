import {
  GetFirewallRuleGroupCommand,
  GetFirewallRuleGroupCommandInput,
  GetFirewallRuleGroupCommandOutput,
  Route53ResolverClient,
  ShareStatus,
} from "@aws-sdk/client-route53resolver";
import {
  WaiterConfiguration,
  WaiterResult,
  WaiterState,
  checkExceptions,
  createWaiter,
} from "@aws-sdk/util-waiter";

const checkState = async (
  client: Route53ResolverClient,
  input: GetFirewallRuleGroupCommandInput
): Promise<WaiterResult> => {
  let reason;
  try {
    const result: GetFirewallRuleGroupCommandOutput = await client.send(
      new GetFirewallRuleGroupCommand(input)
    );
    reason = result;
    if (result.FirewallRuleGroup?.ShareStatus === ShareStatus.NotShared)
      return { state: WaiterState.SUCCESS, reason };
    else return { state: WaiterState.RETRY, reason };
  } catch (exception) {
    reason = exception;
    return { state: WaiterState.FAILURE, reason };
  }
};

/**
 * @description waiter function to check DNS firewall share status set to NOT_SHARED
 * @param {WaiterConfiguration<Route53ResolverClient>} params - Waiter configuration options.
 * @param {GetFirewallRuleGroupCommandInput} input - The input to GetFirewallRuleGroup for polling.
 */
export const waitUntilDNSFirewallRuleGroupNotShared = async (
  params: WaiterConfiguration<Route53ResolverClient>,
  input: GetFirewallRuleGroupCommandInput
): Promise<WaiterResult> => {
  const serviceDefaults = { minDelay: 1, maxDelay: 10 };
  const result = await createWaiter(
    { ...serviceDefaults, ...params },
    input,
    checkState
  );
  return checkExceptions(result);
};
