import { RuntimeModelInterpreter } from "@smithy/core";
import { Client, createAggregatedClient } from "@smithy/smithy-client";

export abstract class AwsRuntimeModelInterpreter extends RuntimeModelInterpreter {
  /**
   * @param BaseClient - a constructor for a base client.
   *
   * @returns a new client constructor with additional methods derived from
   * the operations on the service model. Since it is created at runtime, there are no
   * typings available for this class.
   */
  public create(BaseClient: any): {
    new (config?: any): Client<any, any, any, any> & { [method: string]: (...args: any[]) => Promise<any> };
  } {
    const commands = {} as Record<string, any>;

    for (const operation of this.getServiceShape().operations) {
      const target = operation.target;
      const commandName = target.split("#")[1] + "Command";
      commands[commandName] = this.createCommand(target);
    }

    class AwsSdkClient extends BaseClient {}

    createAggregatedClient(commands, AwsSdkClient);

    return AwsSdkClient;
  }
}
