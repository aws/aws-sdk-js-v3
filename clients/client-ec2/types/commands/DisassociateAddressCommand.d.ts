import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DisassociateAddressRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisassociateAddressCommandInput = DisassociateAddressRequest;
export declare type DisassociateAddressCommandOutput = __MetadataBearer;
export declare class DisassociateAddressCommand extends $Command<DisassociateAddressCommandInput, DisassociateAddressCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DisassociateAddressCommandInput;
    constructor(input: DisassociateAddressCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateAddressCommandInput, DisassociateAddressCommandOutput>;
    private serialize;
    private deserialize;
}
