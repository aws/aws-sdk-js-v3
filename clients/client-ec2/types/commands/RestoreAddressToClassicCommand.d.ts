import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { RestoreAddressToClassicRequest, RestoreAddressToClassicResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RestoreAddressToClassicCommandInput = RestoreAddressToClassicRequest;
export declare type RestoreAddressToClassicCommandOutput = RestoreAddressToClassicResult & __MetadataBearer;
export declare class RestoreAddressToClassicCommand extends $Command<RestoreAddressToClassicCommandInput, RestoreAddressToClassicCommandOutput, EC2ClientResolvedConfig> {
    readonly input: RestoreAddressToClassicCommandInput;
    constructor(input: RestoreAddressToClassicCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RestoreAddressToClassicCommandInput, RestoreAddressToClassicCommandOutput>;
    private serialize;
    private deserialize;
}
