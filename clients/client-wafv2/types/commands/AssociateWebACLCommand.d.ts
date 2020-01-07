import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";
import { AssociateWebACLRequest, AssociateWebACLResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateWebACLCommandInput = AssociateWebACLRequest;
export declare type AssociateWebACLCommandOutput = AssociateWebACLResponse & __MetadataBearer;
export declare class AssociateWebACLCommand extends $Command<AssociateWebACLCommandInput, AssociateWebACLCommandOutput, WAFV2ClientResolvedConfig> {
    readonly input: AssociateWebACLCommandInput;
    constructor(input: AssociateWebACLCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateWebACLCommandInput, AssociateWebACLCommandOutput>;
    private serialize;
    private deserialize;
}
