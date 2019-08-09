/**
 * <p>Describes an action to write a message to a Salesforce IoT Cloud Input Stream.</p>
 */
export interface _SalesforceAction {
  /**
   * <p>The token used to authenticate access to the Salesforce IoT Cloud Input Stream. The token is available from the Salesforce IoT Cloud platform after creation of the Input Stream.</p>
   */
  token: string;

  /**
   * <p>The URL exposed by the Salesforce IoT Cloud Input Stream. The URL is available from the Salesforce IoT Cloud platform after creation of the Input Stream.</p>
   */
  url: string;
}

export type _UnmarshalledSalesforceAction = _SalesforceAction;
