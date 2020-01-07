import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AssociateDhcpOptionsRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateDhcpOptionsCommandInput = AssociateDhcpOptionsRequest;
export declare type AssociateDhcpOptionsCommandOutput = __MetadataBearer;
export declare class AssociateDhcpOptionsCommand extends $Command<AssociateDhcpOptionsCommandInput, AssociateDhcpOptionsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: AssociateDhcpOptionsCommandInput;
    constructor(input: AssociateDhcpOptionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateDhcpOptionsCommandInput, AssociateDhcpOptionsCommandOutput>;
    private serialize;
    private deserialize;
}
