import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { DeleteCloudFrontOriginAccessIdentityRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteCloudFrontOriginAccessIdentityCommandInput = DeleteCloudFrontOriginAccessIdentityRequest;
export declare type DeleteCloudFrontOriginAccessIdentityCommandOutput = __MetadataBearer;
export declare class DeleteCloudFrontOriginAccessIdentityCommand extends $Command<DeleteCloudFrontOriginAccessIdentityCommandInput, DeleteCloudFrontOriginAccessIdentityCommandOutput, CloudFrontClientResolvedConfig> {
    readonly input: DeleteCloudFrontOriginAccessIdentityCommandInput;
    constructor(input: DeleteCloudFrontOriginAccessIdentityCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFrontClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteCloudFrontOriginAccessIdentityCommandInput, DeleteCloudFrontOriginAccessIdentityCommandOutput>;
    private serialize;
    private deserialize;
}
