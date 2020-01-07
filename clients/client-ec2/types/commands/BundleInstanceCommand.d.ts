import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { BundleInstanceRequest, BundleInstanceResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type BundleInstanceCommandInput = BundleInstanceRequest;
export declare type BundleInstanceCommandOutput = BundleInstanceResult & __MetadataBearer;
export declare class BundleInstanceCommand extends $Command<BundleInstanceCommandInput, BundleInstanceCommandOutput, EC2ClientResolvedConfig> {
    readonly input: BundleInstanceCommandInput;
    constructor(input: BundleInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BundleInstanceCommandInput, BundleInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
