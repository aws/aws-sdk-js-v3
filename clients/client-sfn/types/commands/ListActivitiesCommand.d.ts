import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient";
import { ListActivitiesInput, ListActivitiesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListActivitiesCommandInput = ListActivitiesInput;
export declare type ListActivitiesCommandOutput = ListActivitiesOutput & __MetadataBearer;
export declare class ListActivitiesCommand extends $Command<ListActivitiesCommandInput, ListActivitiesCommandOutput, SFNClientResolvedConfig> {
    readonly input: ListActivitiesCommandInput;
    constructor(input: ListActivitiesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SFNClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListActivitiesCommandInput, ListActivitiesCommandOutput>;
    private serialize;
    private deserialize;
}
