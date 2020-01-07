import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AssociateAddressRequest, AssociateAddressResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AssociateAddressCommandInput = AssociateAddressRequest;
export declare type AssociateAddressCommandOutput = AssociateAddressResult & __MetadataBearer;
export declare class AssociateAddressCommand extends $Command<AssociateAddressCommandInput, AssociateAddressCommandOutput, EC2ClientResolvedConfig> {
    readonly input: AssociateAddressCommandInput;
    constructor(input: AssociateAddressCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateAddressCommandInput, AssociateAddressCommandOutput>;
    private serialize;
    private deserialize;
}
