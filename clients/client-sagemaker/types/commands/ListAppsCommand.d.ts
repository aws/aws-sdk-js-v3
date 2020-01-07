import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { ListAppsRequest, ListAppsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListAppsCommandInput = ListAppsRequest;
export declare type ListAppsCommandOutput = ListAppsResponse & __MetadataBearer;
export declare class ListAppsCommand extends $Command<ListAppsCommandInput, ListAppsCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: ListAppsCommandInput;
    constructor(input: ListAppsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAppsCommandInput, ListAppsCommandOutput>;
    private serialize;
    private deserialize;
}
