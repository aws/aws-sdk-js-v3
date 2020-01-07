import { SWFClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SWFClient";
import { ActivityTypeInfos, ListActivityTypesInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListActivityTypesCommandInput = ListActivityTypesInput;
export declare type ListActivityTypesCommandOutput = ActivityTypeInfos & __MetadataBearer;
export declare class ListActivityTypesCommand extends $Command<ListActivityTypesCommandInput, ListActivityTypesCommandOutput, SWFClientResolvedConfig> {
    readonly input: ListActivityTypesCommandInput;
    constructor(input: ListActivityTypesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SWFClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListActivityTypesCommandInput, ListActivityTypesCommandOutput>;
    private serialize;
    private deserialize;
}
