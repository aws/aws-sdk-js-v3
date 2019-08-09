import { _StringFilterList } from "./_StringFilterList";
import { _DateFilterList } from "./_DateFilterList";
import { _NumberFilterList } from "./_NumberFilterList";
import { _MapFilterList } from "./_MapFilterList";
import { _IpFilterList } from "./_IpFilterList";
import { _KeywordFilterList } from "./_KeywordFilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AwsSecurityFindingFilters: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ProductArn: {
      shape: _StringFilterList
    },
    AwsAccountId: {
      shape: _StringFilterList
    },
    Id: {
      shape: _StringFilterList
    },
    GeneratorId: {
      shape: _StringFilterList
    },
    Type: {
      shape: _StringFilterList
    },
    FirstObservedAt: {
      shape: _DateFilterList
    },
    LastObservedAt: {
      shape: _DateFilterList
    },
    CreatedAt: {
      shape: _DateFilterList
    },
    UpdatedAt: {
      shape: _DateFilterList
    },
    SeverityProduct: {
      shape: _NumberFilterList
    },
    SeverityNormalized: {
      shape: _NumberFilterList
    },
    SeverityLabel: {
      shape: _StringFilterList
    },
    Confidence: {
      shape: _NumberFilterList
    },
    Criticality: {
      shape: _NumberFilterList
    },
    Title: {
      shape: _StringFilterList
    },
    Description: {
      shape: _StringFilterList
    },
    RecommendationText: {
      shape: _StringFilterList
    },
    SourceUrl: {
      shape: _StringFilterList
    },
    ProductFields: {
      shape: _MapFilterList
    },
    ProductName: {
      shape: _StringFilterList
    },
    CompanyName: {
      shape: _StringFilterList
    },
    UserDefinedFields: {
      shape: _MapFilterList
    },
    MalwareName: {
      shape: _StringFilterList
    },
    MalwareType: {
      shape: _StringFilterList
    },
    MalwarePath: {
      shape: _StringFilterList
    },
    MalwareState: {
      shape: _StringFilterList
    },
    NetworkDirection: {
      shape: _StringFilterList
    },
    NetworkProtocol: {
      shape: _StringFilterList
    },
    NetworkSourceIpV4: {
      shape: _IpFilterList
    },
    NetworkSourceIpV6: {
      shape: _IpFilterList
    },
    NetworkSourcePort: {
      shape: _NumberFilterList
    },
    NetworkSourceDomain: {
      shape: _StringFilterList
    },
    NetworkSourceMac: {
      shape: _StringFilterList
    },
    NetworkDestinationIpV4: {
      shape: _IpFilterList
    },
    NetworkDestinationIpV6: {
      shape: _IpFilterList
    },
    NetworkDestinationPort: {
      shape: _NumberFilterList
    },
    NetworkDestinationDomain: {
      shape: _StringFilterList
    },
    ProcessName: {
      shape: _StringFilterList
    },
    ProcessPath: {
      shape: _StringFilterList
    },
    ProcessPid: {
      shape: _NumberFilterList
    },
    ProcessParentPid: {
      shape: _NumberFilterList
    },
    ProcessLaunchedAt: {
      shape: _DateFilterList
    },
    ProcessTerminatedAt: {
      shape: _DateFilterList
    },
    ThreatIntelIndicatorType: {
      shape: _StringFilterList
    },
    ThreatIntelIndicatorValue: {
      shape: _StringFilterList
    },
    ThreatIntelIndicatorCategory: {
      shape: _StringFilterList
    },
    ThreatIntelIndicatorLastObservedAt: {
      shape: _DateFilterList
    },
    ThreatIntelIndicatorSource: {
      shape: _StringFilterList
    },
    ThreatIntelIndicatorSourceUrl: {
      shape: _StringFilterList
    },
    ResourceType: {
      shape: _StringFilterList
    },
    ResourceId: {
      shape: _StringFilterList
    },
    ResourcePartition: {
      shape: _StringFilterList
    },
    ResourceRegion: {
      shape: _StringFilterList
    },
    ResourceTags: {
      shape: _MapFilterList
    },
    ResourceAwsEc2InstanceType: {
      shape: _StringFilterList
    },
    ResourceAwsEc2InstanceImageId: {
      shape: _StringFilterList
    },
    ResourceAwsEc2InstanceIpV4Addresses: {
      shape: _IpFilterList
    },
    ResourceAwsEc2InstanceIpV6Addresses: {
      shape: _IpFilterList
    },
    ResourceAwsEc2InstanceKeyName: {
      shape: _StringFilterList
    },
    ResourceAwsEc2InstanceIamInstanceProfileArn: {
      shape: _StringFilterList
    },
    ResourceAwsEc2InstanceVpcId: {
      shape: _StringFilterList
    },
    ResourceAwsEc2InstanceSubnetId: {
      shape: _StringFilterList
    },
    ResourceAwsEc2InstanceLaunchedAt: {
      shape: _DateFilterList
    },
    ResourceAwsS3BucketOwnerId: {
      shape: _StringFilterList
    },
    ResourceAwsS3BucketOwnerName: {
      shape: _StringFilterList
    },
    ResourceAwsIamAccessKeyUserName: {
      shape: _StringFilterList
    },
    ResourceAwsIamAccessKeyStatus: {
      shape: _StringFilterList
    },
    ResourceAwsIamAccessKeyCreatedAt: {
      shape: _DateFilterList
    },
    ResourceContainerName: {
      shape: _StringFilterList
    },
    ResourceContainerImageId: {
      shape: _StringFilterList
    },
    ResourceContainerImageName: {
      shape: _StringFilterList
    },
    ResourceContainerLaunchedAt: {
      shape: _DateFilterList
    },
    ResourceDetailsOther: {
      shape: _MapFilterList
    },
    ComplianceStatus: {
      shape: _StringFilterList
    },
    VerificationState: {
      shape: _StringFilterList
    },
    WorkflowState: {
      shape: _StringFilterList
    },
    RecordState: {
      shape: _StringFilterList
    },
    RelatedFindingsProductArn: {
      shape: _StringFilterList
    },
    RelatedFindingsId: {
      shape: _StringFilterList
    },
    NoteText: {
      shape: _StringFilterList
    },
    NoteUpdatedAt: {
      shape: _DateFilterList
    },
    NoteUpdatedBy: {
      shape: _StringFilterList
    },
    Keyword: {
      shape: _KeywordFilterList
    }
  }
};
