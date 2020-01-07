import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListSubscribedWorkteamsRequest, ListSubscribedWorkteamsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListSubscribedWorkteamsCommandInput = ListSubscribedWorkteamsRequest;
export declare type ListSubscribedWorkteamsCommandOutput = ListSubscribedWorkteamsResponse & __MetadataBearer;
export declare class ListSubscribedWorkteamsCommand extends $Command<ListSubscribedWorkteamsCommandInput, ListSubscribedWorkteamsCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListSubscribedWorkteamsCommandInput;
    constructor(input: ListSubscribedWorkteamsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListSubscribedWorkteamsCommandInput, ListSubscribedWorkteamsCommandOutput>;
    private serialize;
    private deserialize;
}
