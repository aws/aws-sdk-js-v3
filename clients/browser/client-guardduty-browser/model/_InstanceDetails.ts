import { _IamInstanceProfile } from "./_IamInstanceProfile";
import { _NetworkInterfaces } from "./_NetworkInterfaces";
import { _ProductCodes } from "./_ProductCodes";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AvailabilityZone: {
      shape: {
        type: "string"
      },
      locationName: "availabilityZone"
    },
    IamInstanceProfile: {
      shape: _IamInstanceProfile,
      locationName: "iamInstanceProfile"
    },
    ImageDescription: {
      shape: {
        type: "string"
      },
      locationName: "imageDescription"
    },
    ImageId: {
      shape: {
        type: "string"
      },
      locationName: "imageId"
    },
    InstanceId: {
      shape: {
        type: "string"
      },
      locationName: "instanceId"
    },
    InstanceState: {
      shape: {
        type: "string"
      },
      locationName: "instanceState"
    },
    InstanceType: {
      shape: {
        type: "string"
      },
      locationName: "instanceType"
    },
    LaunchTime: {
      shape: {
        type: "string"
      },
      locationName: "launchTime"
    },
    NetworkInterfaces: {
      shape: _NetworkInterfaces,
      locationName: "networkInterfaces"
    },
    Platform: {
      shape: {
        type: "string"
      },
      locationName: "platform"
    },
    ProductCodes: {
      shape: _ProductCodes,
      locationName: "productCodes"
    },
    Tags: {
      shape: _Tags,
      locationName: "tags"
    }
  }
};
