import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListTrialsRequest, ListTrialsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTrialsCommandInput = ListTrialsRequest;
export declare type ListTrialsCommandOutput = ListTrialsResponse & __MetadataBearer;
export declare class ListTrialsCommand extends $Command<ListTrialsCommandInput, ListTrialsCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListTrialsCommandInput;
    constructor(input: ListTrialsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTrialsCommandInput, ListTrialsCommandOutput>;
    private serialize;
    private deserialize;
}
