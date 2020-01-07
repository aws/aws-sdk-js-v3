import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DisassociateVpcCidrBlockRequest, DisassociateVpcCidrBlockResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisassociateVpcCidrBlockCommandInput = DisassociateVpcCidrBlockRequest;
export declare type DisassociateVpcCidrBlockCommandOutput = DisassociateVpcCidrBlockResult & __MetadataBearer;
export declare class DisassociateVpcCidrBlockCommand extends $Command<DisassociateVpcCidrBlockCommandInput, DisassociateVpcCidrBlockCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DisassociateVpcCidrBlockCommandInput;
    constructor(input: DisassociateVpcCidrBlockCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateVpcCidrBlockCommandInput, DisassociateVpcCidrBlockCommandOutput>;
    private serialize;
    private deserialize;
}
