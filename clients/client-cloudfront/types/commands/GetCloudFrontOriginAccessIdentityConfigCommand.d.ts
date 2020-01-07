import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { GetCloudFrontOriginAccessIdentityConfigRequest, GetCloudFrontOriginAccessIdentityConfigResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetCloudFrontOriginAccessIdentityConfigCommandInput = GetCloudFrontOriginAccessIdentityConfigRequest;
export declare type GetCloudFrontOriginAccessIdentityConfigCommandOutput = GetCloudFrontOriginAccessIdentityConfigResult & __MetadataBearer;
export declare class GetCloudFrontOriginAccessIdentityConfigCommand extends $Command<GetCloudFrontOriginAccessIdentityConfigCommandInput, GetCloudFrontOriginAccessIdentityConfigCommandOutput, CloudFrontClientResolvedConfig> {
    readonly input: GetCloudFrontOriginAccessIdentityConfigCommandInput;
    constructor(input: GetCloudFrontOriginAccessIdentityConfigCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFrontClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCloudFrontOriginAccessIdentityConfigCommandInput, GetCloudFrontOriginAccessIdentityConfigCommandOutput>;
    private serialize;
    private deserialize;
}
