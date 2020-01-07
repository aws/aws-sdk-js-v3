import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { GetHITRequest, GetHITResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetHITCommandInput = GetHITRequest;
export declare type GetHITCommandOutput = GetHITResponse & __MetadataBearer;
export declare class GetHITCommand extends $Command<GetHITCommandInput, GetHITCommandOutput, MTurkClientResolvedConfig> {
    readonly input: GetHITCommandInput;
    constructor(input: GetHITCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetHITCommandInput, GetHITCommandOutput>;
    private serialize;
    private deserialize;
}
