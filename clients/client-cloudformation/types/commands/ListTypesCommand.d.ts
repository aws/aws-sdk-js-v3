import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { ListTypesInput, ListTypesOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListTypesCommandInput = ListTypesInput;
export declare type ListTypesCommandOutput = ListTypesOutput & __MetadataBearer;
export declare class ListTypesCommand extends $Command<ListTypesCommandInput, ListTypesCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: ListTypesCommandInput;
    constructor(input: ListTypesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTypesCommandInput, ListTypesCommandOutput>;
    private serialize;
    private deserialize;
}
