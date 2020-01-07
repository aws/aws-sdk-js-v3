import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { AllocateAddressRequest, AllocateAddressResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AllocateAddressCommandInput = AllocateAddressRequest;
export declare type AllocateAddressCommandOutput = AllocateAddressResult & __MetadataBearer;
export declare class AllocateAddressCommand extends $Command<AllocateAddressCommandInput, AllocateAddressCommandOutput, EC2ClientResolvedConfig> {
    readonly input: AllocateAddressCommandInput;
    constructor(input: AllocateAddressCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AllocateAddressCommandInput, AllocateAddressCommandOutput>;
    private serialize;
    private deserialize;
}
