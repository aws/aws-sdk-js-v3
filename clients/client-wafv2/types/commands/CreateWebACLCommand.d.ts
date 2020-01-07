import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";
import { CreateWebACLRequest, CreateWebACLResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateWebACLCommandInput = CreateWebACLRequest;
export declare type CreateWebACLCommandOutput = CreateWebACLResponse & __MetadataBearer;
export declare class CreateWebACLCommand extends $Command<CreateWebACLCommandInput, CreateWebACLCommandOutput, WAFV2ClientResolvedConfig> {
    readonly input: CreateWebACLCommandInput;
    constructor(input: CreateWebACLCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateWebACLCommandInput, CreateWebACLCommandOutput>;
    private serialize;
    private deserialize;
}
