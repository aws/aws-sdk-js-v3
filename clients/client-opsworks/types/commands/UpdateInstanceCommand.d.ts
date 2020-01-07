import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { UpdateInstanceRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateInstanceCommandInput = UpdateInstanceRequest;
export declare type UpdateInstanceCommandOutput = __MetadataBearer;
export declare class UpdateInstanceCommand extends $Command<UpdateInstanceCommandInput, UpdateInstanceCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: UpdateInstanceCommandInput;
    constructor(input: UpdateInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateInstanceCommandInput, UpdateInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
