import { DAXClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DAXClient";
import { DeleteParameterGroupRequest, DeleteParameterGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteParameterGroupCommandInput = DeleteParameterGroupRequest;
export declare type DeleteParameterGroupCommandOutput = DeleteParameterGroupResponse & __MetadataBearer;
export declare class DeleteParameterGroupCommand extends $Command<DeleteParameterGroupCommandInput, DeleteParameterGroupCommandOutput, DAXClientResolvedConfig> {
    readonly input: DeleteParameterGroupCommandInput;
    constructor(input: DeleteParameterGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DAXClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteParameterGroupCommandInput, DeleteParameterGroupCommandOutput>;
    private serialize;
    private deserialize;
}
