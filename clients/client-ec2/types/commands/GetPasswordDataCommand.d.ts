import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetPasswordDataRequest, GetPasswordDataResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetPasswordDataCommandInput = GetPasswordDataRequest;
export declare type GetPasswordDataCommandOutput = GetPasswordDataResult & __MetadataBearer;
export declare class GetPasswordDataCommand extends $Command<GetPasswordDataCommandInput, GetPasswordDataCommandOutput, EC2ClientResolvedConfig> {
    readonly input: GetPasswordDataCommandInput;
    constructor(input: GetPasswordDataCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPasswordDataCommandInput, GetPasswordDataCommandOutput>;
    private serialize;
    private deserialize;
}
