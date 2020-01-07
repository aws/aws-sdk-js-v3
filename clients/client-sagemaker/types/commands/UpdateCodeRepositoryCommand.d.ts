import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { UpdateCodeRepositoryInput, UpdateCodeRepositoryOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateCodeRepositoryCommandInput = UpdateCodeRepositoryInput;
export declare type UpdateCodeRepositoryCommandOutput = UpdateCodeRepositoryOutput & __MetadataBearer;
export declare class UpdateCodeRepositoryCommand extends $Command<UpdateCodeRepositoryCommandInput, UpdateCodeRepositoryCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: UpdateCodeRepositoryCommandInput;
    constructor(input: UpdateCodeRepositoryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateCodeRepositoryCommandInput, UpdateCodeRepositoryCommandOutput>;
    private serialize;
    private deserialize;
}
