import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ReleaseAddressRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ReleaseAddressCommandInput = ReleaseAddressRequest;
export declare type ReleaseAddressCommandOutput = __MetadataBearer;
export declare class ReleaseAddressCommand extends $Command<ReleaseAddressCommandInput, ReleaseAddressCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ReleaseAddressCommandInput;
    constructor(input: ReleaseAddressCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ReleaseAddressCommandInput, ReleaseAddressCommandOutput>;
    private serialize;
    private deserialize;
}
