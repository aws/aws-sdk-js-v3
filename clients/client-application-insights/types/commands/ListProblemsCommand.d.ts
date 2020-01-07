import { ApplicationInsightsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationInsightsClient";
import { ListProblemsRequest, ListProblemsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListProblemsCommandInput = ListProblemsRequest;
export declare type ListProblemsCommandOutput = ListProblemsResponse & __MetadataBearer;
export declare class ListProblemsCommand extends $Command<ListProblemsCommandInput, ListProblemsCommandOutput, ApplicationInsightsClientResolvedConfig> {
    readonly input: ListProblemsCommandInput;
    constructor(input: ListProblemsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationInsightsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListProblemsCommandInput, ListProblemsCommandOutput>;
    private serialize;
    private deserialize;
}
