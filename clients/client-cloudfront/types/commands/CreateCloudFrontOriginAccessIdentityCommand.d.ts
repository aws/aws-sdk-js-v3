import { CloudFrontClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFrontClient";
import { CreateCloudFrontOriginAccessIdentityRequest, CreateCloudFrontOriginAccessIdentityResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateCloudFrontOriginAccessIdentityCommandInput = CreateCloudFrontOriginAccessIdentityRequest;
export declare type CreateCloudFrontOriginAccessIdentityCommandOutput = CreateCloudFrontOriginAccessIdentityResult & __MetadataBearer;
export declare class CreateCloudFrontOriginAccessIdentityCommand extends $Command<CreateCloudFrontOriginAccessIdentityCommandInput, CreateCloudFrontOriginAccessIdentityCommandOutput, CloudFrontClientResolvedConfig> {
    readonly input: CreateCloudFrontOriginAccessIdentityCommandInput;
    constructor(input: CreateCloudFrontOriginAccessIdentityCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFrontClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCloudFrontOriginAccessIdentityCommandInput, CreateCloudFrontOriginAccessIdentityCommandOutput>;
    private serialize;
    private deserialize;
}
