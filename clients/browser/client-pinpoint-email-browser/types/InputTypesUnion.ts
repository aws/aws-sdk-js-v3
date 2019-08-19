import { CreateConfigurationSetInput } from "./CreateConfigurationSetInput";
import { CreateConfigurationSetEventDestinationInput } from "./CreateConfigurationSetEventDestinationInput";
import { CreateDedicatedIpPoolInput } from "./CreateDedicatedIpPoolInput";
import { CreateDeliverabilityTestReportInput } from "./CreateDeliverabilityTestReportInput";
import { CreateEmailIdentityInput } from "./CreateEmailIdentityInput";
import { DeleteConfigurationSetInput } from "./DeleteConfigurationSetInput";
import { DeleteConfigurationSetEventDestinationInput } from "./DeleteConfigurationSetEventDestinationInput";
import { DeleteDedicatedIpPoolInput } from "./DeleteDedicatedIpPoolInput";
import { DeleteEmailIdentityInput } from "./DeleteEmailIdentityInput";
import { GetAccountInput } from "./GetAccountInput";
import { GetBlacklistReportsInput } from "./GetBlacklistReportsInput";
import { GetConfigurationSetInput } from "./GetConfigurationSetInput";
import { GetConfigurationSetEventDestinationsInput } from "./GetConfigurationSetEventDestinationsInput";
import { GetDedicatedIpInput } from "./GetDedicatedIpInput";
import { GetDedicatedIpsInput } from "./GetDedicatedIpsInput";
import { GetDeliverabilityDashboardOptionsInput } from "./GetDeliverabilityDashboardOptionsInput";
import { GetDeliverabilityTestReportInput } from "./GetDeliverabilityTestReportInput";
import { GetDomainDeliverabilityCampaignInput } from "./GetDomainDeliverabilityCampaignInput";
import { GetDomainStatisticsReportInput } from "./GetDomainStatisticsReportInput";
import { GetEmailIdentityInput } from "./GetEmailIdentityInput";
import { ListConfigurationSetsInput } from "./ListConfigurationSetsInput";
import { ListDedicatedIpPoolsInput } from "./ListDedicatedIpPoolsInput";
import { ListDeliverabilityTestReportsInput } from "./ListDeliverabilityTestReportsInput";
import { ListDomainDeliverabilityCampaignsInput } from "./ListDomainDeliverabilityCampaignsInput";
import { ListEmailIdentitiesInput } from "./ListEmailIdentitiesInput";
import { ListTagsForResourceInput } from "./ListTagsForResourceInput";
import { PutAccountDedicatedIpWarmupAttributesInput } from "./PutAccountDedicatedIpWarmupAttributesInput";
import { PutAccountSendingAttributesInput } from "./PutAccountSendingAttributesInput";
import { PutConfigurationSetDeliveryOptionsInput } from "./PutConfigurationSetDeliveryOptionsInput";
import { PutConfigurationSetReputationOptionsInput } from "./PutConfigurationSetReputationOptionsInput";
import { PutConfigurationSetSendingOptionsInput } from "./PutConfigurationSetSendingOptionsInput";
import { PutConfigurationSetTrackingOptionsInput } from "./PutConfigurationSetTrackingOptionsInput";
import { PutDedicatedIpInPoolInput } from "./PutDedicatedIpInPoolInput";
import { PutDedicatedIpWarmupAttributesInput } from "./PutDedicatedIpWarmupAttributesInput";
import { PutDeliverabilityDashboardOptionInput } from "./PutDeliverabilityDashboardOptionInput";
import { PutEmailIdentityDkimAttributesInput } from "./PutEmailIdentityDkimAttributesInput";
import { PutEmailIdentityFeedbackAttributesInput } from "./PutEmailIdentityFeedbackAttributesInput";
import { PutEmailIdentityMailFromAttributesInput } from "./PutEmailIdentityMailFromAttributesInput";
import { SendEmailInput } from "./SendEmailInput";
import { TagResourceInput } from "./TagResourceInput";
import { UntagResourceInput } from "./UntagResourceInput";
import { UpdateConfigurationSetEventDestinationInput } from "./UpdateConfigurationSetEventDestinationInput";
export type InputTypesUnion =
  | CreateConfigurationSetInput
  | CreateConfigurationSetEventDestinationInput
  | CreateDedicatedIpPoolInput
  | CreateDeliverabilityTestReportInput
  | CreateEmailIdentityInput
  | DeleteConfigurationSetInput
  | DeleteConfigurationSetEventDestinationInput
  | DeleteDedicatedIpPoolInput
  | DeleteEmailIdentityInput
  | GetAccountInput
  | GetBlacklistReportsInput
  | GetConfigurationSetInput
  | GetConfigurationSetEventDestinationsInput
  | GetDedicatedIpInput
  | GetDedicatedIpsInput
  | GetDeliverabilityDashboardOptionsInput
  | GetDeliverabilityTestReportInput
  | GetDomainDeliverabilityCampaignInput
  | GetDomainStatisticsReportInput
  | GetEmailIdentityInput
  | ListConfigurationSetsInput
  | ListDedicatedIpPoolsInput
  | ListDeliverabilityTestReportsInput
  | ListDomainDeliverabilityCampaignsInput
  | ListEmailIdentitiesInput
  | ListTagsForResourceInput
  | PutAccountDedicatedIpWarmupAttributesInput
  | PutAccountSendingAttributesInput
  | PutConfigurationSetDeliveryOptionsInput
  | PutConfigurationSetReputationOptionsInput
  | PutConfigurationSetSendingOptionsInput
  | PutConfigurationSetTrackingOptionsInput
  | PutDedicatedIpInPoolInput
  | PutDedicatedIpWarmupAttributesInput
  | PutDeliverabilityDashboardOptionInput
  | PutEmailIdentityDkimAttributesInput
  | PutEmailIdentityFeedbackAttributesInput
  | PutEmailIdentityMailFromAttributesInput
  | SendEmailInput
  | TagResourceInput
  | UntagResourceInput
  | UpdateConfigurationSetEventDestinationInput;
