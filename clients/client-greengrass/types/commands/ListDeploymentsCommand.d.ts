import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListDeploymentsRequest, ListDeploymentsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListDeploymentsCommandInput = ListDeploymentsRequest;
export declare type ListDeploymentsCommandOutput = ListDeploymentsResponse & __MetadataBearer;
export declare class ListDeploymentsCommand extends $Command<ListDeploymentsCommandInput, ListDeploymentsCommandOutput, GreengrassClientResolvedConfig> {
    readonly input: ListDeploymentsCommandInput;
    constructor(input: ListDeploymentsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GreengrassClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListDeploymentsCommandInput, ListDeploymentsCommandOutput>;
    private serialize;
    private deserialize;
}
