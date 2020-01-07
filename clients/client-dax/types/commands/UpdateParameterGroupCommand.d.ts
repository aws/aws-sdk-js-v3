import { DAXClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DAXClient";
import { UpdateParameterGroupRequest, UpdateParameterGroupResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateParameterGroupCommandInput = UpdateParameterGroupRequest;
export declare type UpdateParameterGroupCommandOutput = UpdateParameterGroupResponse & __MetadataBearer;
export declare class UpdateParameterGroupCommand extends $Command<UpdateParameterGroupCommandInput, UpdateParameterGroupCommandOutput, DAXClientResolvedConfig> {
    readonly input: UpdateParameterGroupCommandInput;
    constructor(input: UpdateParameterGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DAXClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateParameterGroupCommandInput, UpdateParameterGroupCommandOutput>;
    private serialize;
    private deserialize;
}
