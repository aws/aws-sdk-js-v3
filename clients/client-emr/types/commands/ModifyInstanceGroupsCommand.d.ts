import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { ModifyInstanceGroupsInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyInstanceGroupsCommandInput = ModifyInstanceGroupsInput;
export declare type ModifyInstanceGroupsCommandOutput = __MetadataBearer;
export declare class ModifyInstanceGroupsCommand extends $Command<ModifyInstanceGroupsCommandInput, ModifyInstanceGroupsCommandOutput, EMRClientResolvedConfig> {
    readonly input: ModifyInstanceGroupsCommandInput;
    constructor(input: ModifyInstanceGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyInstanceGroupsCommandInput, ModifyInstanceGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
