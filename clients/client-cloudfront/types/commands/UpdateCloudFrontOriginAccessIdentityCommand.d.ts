import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { UpdateCloudFrontOriginAccessIdentityRequest, UpdateCloudFrontOriginAccessIdentityResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateCloudFrontOriginAccessIdentityCommandInput = UpdateCloudFrontOriginAccessIdentityRequest;
export declare type UpdateCloudFrontOriginAccessIdentityCommandOutput = UpdateCloudFrontOriginAccessIdentityResult & __MetadataBearer;
export declare class UpdateCloudFrontOriginAccessIdentityCommand extends $Command<UpdateCloudFrontOriginAccessIdentityCommandInput, UpdateCloudFrontOriginAccessIdentityCommandOutput, CloudFrontClientResolvedConfig> {
    readonly input: UpdateCloudFrontOriginAccessIdentityCommandInput;
    constructor(input: UpdateCloudFrontOriginAccessIdentityCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFrontClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateCloudFrontOriginAccessIdentityCommandInput, UpdateCloudFrontOriginAccessIdentityCommandOutput>;
    private serialize;
    private deserialize;
}
