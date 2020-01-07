import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { CreateHITRequest, CreateHITResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateHITCommandInput = CreateHITRequest;
export declare type CreateHITCommandOutput = CreateHITResponse & __MetadataBearer;
export declare class CreateHITCommand extends $Command<CreateHITCommandInput, CreateHITCommandOutput, MTurkClientResolvedConfig> {
    readonly input: CreateHITCommandInput;
    constructor(input: CreateHITCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateHITCommandInput, CreateHITCommandOutput>;
    private serialize;
    private deserialize;
}
