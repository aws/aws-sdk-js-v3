import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListWorkteamsRequest, ListWorkteamsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListWorkteamsCommandInput = ListWorkteamsRequest;
export declare type ListWorkteamsCommandOutput = ListWorkteamsResponse & __MetadataBearer;
export declare class ListWorkteamsCommand extends $Command<ListWorkteamsCommandInput, ListWorkteamsCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListWorkteamsCommandInput;
    constructor(input: ListWorkteamsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListWorkteamsCommandInput, ListWorkteamsCommandOutput>;
    private serialize;
    private deserialize;
}
