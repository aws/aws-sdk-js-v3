import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListCodeRepositoriesInput, ListCodeRepositoriesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListCodeRepositoriesCommandInput = ListCodeRepositoriesInput;
export declare type ListCodeRepositoriesCommandOutput = ListCodeRepositoriesOutput & __MetadataBearer;
export declare class ListCodeRepositoriesCommand extends $Command<ListCodeRepositoriesCommandInput, ListCodeRepositoriesCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListCodeRepositoriesCommandInput;
    constructor(input: ListCodeRepositoriesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListCodeRepositoriesCommandInput, ListCodeRepositoriesCommandOutput>;
    private serialize;
    private deserialize;
}
