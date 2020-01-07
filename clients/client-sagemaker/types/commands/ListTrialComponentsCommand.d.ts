import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListTrialComponentsRequest, ListTrialComponentsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTrialComponentsCommandInput = ListTrialComponentsRequest;
export declare type ListTrialComponentsCommandOutput = ListTrialComponentsResponse & __MetadataBearer;
export declare class ListTrialComponentsCommand extends $Command<ListTrialComponentsCommandInput, ListTrialComponentsCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListTrialComponentsCommandInput;
    constructor(input: ListTrialComponentsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTrialComponentsCommandInput, ListTrialComponentsCommandOutput>;
    private serialize;
    private deserialize;
}
