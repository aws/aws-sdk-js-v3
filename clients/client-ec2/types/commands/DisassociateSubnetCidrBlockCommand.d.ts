import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DisassociateSubnetCidrBlockRequest, DisassociateSubnetCidrBlockResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisassociateSubnetCidrBlockCommandInput = DisassociateSubnetCidrBlockRequest;
export declare type DisassociateSubnetCidrBlockCommandOutput = DisassociateSubnetCidrBlockResult & __MetadataBearer;
export declare class DisassociateSubnetCidrBlockCommand extends $Command<DisassociateSubnetCidrBlockCommandInput, DisassociateSubnetCidrBlockCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DisassociateSubnetCidrBlockCommandInput;
    constructor(input: DisassociateSubnetCidrBlockCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateSubnetCidrBlockCommandInput, DisassociateSubnetCidrBlockCommandOutput>;
    private serialize;
    private deserialize;
}
