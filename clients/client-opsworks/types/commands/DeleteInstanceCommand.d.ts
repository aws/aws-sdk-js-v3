import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DeleteInstanceRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteInstanceCommandInput = DeleteInstanceRequest;
export declare type DeleteInstanceCommandOutput = __MetadataBearer;
export declare class DeleteInstanceCommand extends $Command<DeleteInstanceCommandInput, DeleteInstanceCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: DeleteInstanceCommandInput;
    constructor(input: DeleteInstanceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteInstanceCommandInput, DeleteInstanceCommandOutput>;
    private serialize;
    private deserialize;
}
