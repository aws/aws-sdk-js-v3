import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListHumanTaskUisRequest, ListHumanTaskUisResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListHumanTaskUisCommandInput = ListHumanTaskUisRequest;
export declare type ListHumanTaskUisCommandOutput = ListHumanTaskUisResponse & __MetadataBearer;
export declare class ListHumanTaskUisCommand extends $Command<ListHumanTaskUisCommandInput, ListHumanTaskUisCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListHumanTaskUisCommandInput;
    constructor(input: ListHumanTaskUisCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListHumanTaskUisCommandInput, ListHumanTaskUisCommandOutput>;
    private serialize;
    private deserialize;
}
