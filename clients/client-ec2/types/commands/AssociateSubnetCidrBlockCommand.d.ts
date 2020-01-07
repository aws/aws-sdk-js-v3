import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AssociateSubnetCidrBlockRequest, AssociateSubnetCidrBlockResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateSubnetCidrBlockCommandInput = AssociateSubnetCidrBlockRequest;
export declare type AssociateSubnetCidrBlockCommandOutput = AssociateSubnetCidrBlockResult & __MetadataBearer;
export declare class AssociateSubnetCidrBlockCommand extends $Command<AssociateSubnetCidrBlockCommandInput, AssociateSubnetCidrBlockCommandOutput, EC2ClientResolvedConfig> {
    readonly input: AssociateSubnetCidrBlockCommandInput;
    constructor(input: AssociateSubnetCidrBlockCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateSubnetCidrBlockCommandInput, AssociateSubnetCidrBlockCommandOutput>;
    private serialize;
    private deserialize;
}
