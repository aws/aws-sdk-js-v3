import { ServiceInputTypes, ServiceOutputTypes, WorkSpacesClientResolvedConfig } from "../WorkSpacesClient";
import { ModifyClientPropertiesRequest, ModifyClientPropertiesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyClientPropertiesCommandInput = ModifyClientPropertiesRequest;
export declare type ModifyClientPropertiesCommandOutput = ModifyClientPropertiesResult & __MetadataBearer;
export declare class ModifyClientPropertiesCommand extends $Command<ModifyClientPropertiesCommandInput, ModifyClientPropertiesCommandOutput, WorkSpacesClientResolvedConfig> {
    readonly input: ModifyClientPropertiesCommandInput;
    constructor(input: ModifyClientPropertiesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkSpacesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyClientPropertiesCommandInput, ModifyClientPropertiesCommandOutput>;
    private serialize;
    private deserialize;
}
