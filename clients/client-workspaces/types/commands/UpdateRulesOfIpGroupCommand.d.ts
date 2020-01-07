import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { UpdateRulesOfIpGroupRequest, UpdateRulesOfIpGroupResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateRulesOfIpGroupCommandInput = UpdateRulesOfIpGroupRequest;
export declare type UpdateRulesOfIpGroupCommandOutput = UpdateRulesOfIpGroupResult & __MetadataBearer;
export declare class UpdateRulesOfIpGroupCommand extends $Command<UpdateRulesOfIpGroupCommandInput, UpdateRulesOfIpGroupCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: UpdateRulesOfIpGroupCommandInput;
    constructor(input: UpdateRulesOfIpGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateRulesOfIpGroupCommandInput, UpdateRulesOfIpGroupCommandOutput>;
    private serialize;
    private deserialize;
}
