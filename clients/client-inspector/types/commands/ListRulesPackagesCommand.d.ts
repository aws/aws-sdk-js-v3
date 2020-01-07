import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { ListRulesPackagesRequest, ListRulesPackagesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListRulesPackagesCommandInput = ListRulesPackagesRequest;
export declare type ListRulesPackagesCommandOutput = ListRulesPackagesResponse & __MetadataBearer;
export declare class ListRulesPackagesCommand extends $Command<ListRulesPackagesCommandInput, ListRulesPackagesCommandOutput, InspectorClientResolvedConfig> {
    readonly input: ListRulesPackagesCommandInput;
    constructor(input: ListRulesPackagesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRulesPackagesCommandInput, ListRulesPackagesCommandOutput>;
    private serialize;
    private deserialize;
}
