import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { GetCloudFrontOriginAccessIdentityRequest, GetCloudFrontOriginAccessIdentityResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetCloudFrontOriginAccessIdentityCommandInput = GetCloudFrontOriginAccessIdentityRequest;
export declare type GetCloudFrontOriginAccessIdentityCommandOutput = GetCloudFrontOriginAccessIdentityResult & __MetadataBearer;
export declare class GetCloudFrontOriginAccessIdentityCommand extends $Command<GetCloudFrontOriginAccessIdentityCommandInput, GetCloudFrontOriginAccessIdentityCommandOutput, CloudFrontClientResolvedConfig> {
    readonly input: GetCloudFrontOriginAccessIdentityCommandInput;
    constructor(input: GetCloudFrontOriginAccessIdentityCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFrontClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCloudFrontOriginAccessIdentityCommandInput, GetCloudFrontOriginAccessIdentityCommandOutput>;
    private serialize;
    private deserialize;
}
