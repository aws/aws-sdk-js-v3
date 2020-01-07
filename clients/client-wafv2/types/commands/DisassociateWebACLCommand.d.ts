import { ServiceInputTypes, ServiceOutputTypes, WAFV2ClientResolvedConfig } from "../WAFV2Client";
import { DisassociateWebACLRequest, DisassociateWebACLResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisassociateWebACLCommandInput = DisassociateWebACLRequest;
export declare type DisassociateWebACLCommandOutput = DisassociateWebACLResponse & __MetadataBearer;
export declare class DisassociateWebACLCommand extends $Command<DisassociateWebACLCommandInput, DisassociateWebACLCommandOutput, WAFV2ClientResolvedConfig> {
    readonly input: DisassociateWebACLCommandInput;
    constructor(input: DisassociateWebACLCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WAFV2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateWebACLCommandInput, DisassociateWebACLCommandOutput>;
    private serialize;
    private deserialize;
}
