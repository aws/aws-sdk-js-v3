import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetConsoleOutputRequest, GetConsoleOutputResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetConsoleOutputCommandInput = GetConsoleOutputRequest;
export declare type GetConsoleOutputCommandOutput = GetConsoleOutputResult & __MetadataBearer;
export declare class GetConsoleOutputCommand extends $Command<GetConsoleOutputCommandInput, GetConsoleOutputCommandOutput, EC2ClientResolvedConfig> {
    readonly input: GetConsoleOutputCommandInput;
    constructor(input: GetConsoleOutputCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetConsoleOutputCommandInput, GetConsoleOutputCommandOutput>;
    private serialize;
    private deserialize;
}
