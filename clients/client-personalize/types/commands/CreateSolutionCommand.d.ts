import { PersonalizeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeClient";
import { CreateSolutionRequest, CreateSolutionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateSolutionCommandInput = CreateSolutionRequest;
export declare type CreateSolutionCommandOutput = CreateSolutionResponse & __MetadataBearer;
export declare class CreateSolutionCommand extends $Command<CreateSolutionCommandInput, CreateSolutionCommandOutput, PersonalizeClientResolvedConfig> {
    readonly input: CreateSolutionCommandInput;
    constructor(input: CreateSolutionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSolutionCommandInput, CreateSolutionCommandOutput>;
    private serialize;
    private deserialize;
}
