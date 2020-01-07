import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AssociateVpcCidrBlockRequest, AssociateVpcCidrBlockResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateVpcCidrBlockCommandInput = AssociateVpcCidrBlockRequest;
export declare type AssociateVpcCidrBlockCommandOutput = AssociateVpcCidrBlockResult & __MetadataBearer;
export declare class AssociateVpcCidrBlockCommand extends $Command<AssociateVpcCidrBlockCommandInput, AssociateVpcCidrBlockCommandOutput, EC2ClientResolvedConfig> {
    readonly input: AssociateVpcCidrBlockCommandInput;
    constructor(input: AssociateVpcCidrBlockCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateVpcCidrBlockCommandInput, AssociateVpcCidrBlockCommandOutput>;
    private serialize;
    private deserialize;
}
