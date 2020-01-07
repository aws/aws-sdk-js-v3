import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient";
import { UpdateServerEngineAttributesRequest, UpdateServerEngineAttributesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateServerEngineAttributesCommandInput = UpdateServerEngineAttributesRequest;
export declare type UpdateServerEngineAttributesCommandOutput = UpdateServerEngineAttributesResponse & __MetadataBearer;
export declare class UpdateServerEngineAttributesCommand extends $Command<UpdateServerEngineAttributesCommandInput, UpdateServerEngineAttributesCommandOutput, OpsWorksCMClientResolvedConfig> {
    readonly input: UpdateServerEngineAttributesCommandInput;
    constructor(input: UpdateServerEngineAttributesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksCMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateServerEngineAttributesCommandInput, UpdateServerEngineAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
