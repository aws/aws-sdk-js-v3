import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";
import { ListLaunchPathsInput, ListLaunchPathsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListLaunchPathsCommandInput = ListLaunchPathsInput;
export declare type ListLaunchPathsCommandOutput = ListLaunchPathsOutput & __MetadataBearer;
export declare class ListLaunchPathsCommand extends $Command<ListLaunchPathsCommandInput, ListLaunchPathsCommandOutput, ServiceCatalogClientResolvedConfig> {
    readonly input: ListLaunchPathsCommandInput;
    constructor(input: ListLaunchPathsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ServiceCatalogClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListLaunchPathsCommandInput, ListLaunchPathsCommandOutput>;
    private serialize;
    private deserialize;
}
